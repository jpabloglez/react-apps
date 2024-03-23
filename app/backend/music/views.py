from django.shortcuts import render

# Create your views here.
import requests
from django.http import JsonResponse
from datetime import datetime, timedelta
import base64
import os
from dotenv import load_dotenv
load_dotenv()

import requests
import os

def get_spotify_token_ext(client_id, client_secret):
    # This URL should be the one where Spotify redirects after user authorization
    redirect_uri = os.getenv("SPOTIFY_REDIRECT_URI", None)

    # The scope necessary to read user's top artists
    scope = "user-top-read"

    # Construct the Spotify URL for the Authorization Code flow
    auth_url = f"https://accounts.spotify.com/authorize?client_id={client_id}&response_type=code&redirect_uri={redirect_uri}&scope={scope}"

    # Redirect the user to this URL. After the user authorizes, Spotify will redirect to the redirect_uri with a code

    # Exchange the code for an access token
    # This part depends on how you handle the redirect and retrieve the authorization code

    # Once you have the code
    code = "YOUR_AUTHORIZATION_CODE"
    token_url = "https://accounts.spotify.com/api/token"
    payload = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": redirect_uri,
        "client_id": client_id,
        "client_secret": client_secret
    }

    response = requests.post(token_url, data=payload)

    if response.status_code == 200:
        return response.json()['access_token']
    else:
        return None



# Function to get Spotify access token
def get_spotify_token(client_id, client_secret):
    """ Get Spotify access token using client credentials flow. """
    print("Client ID:", client_id)
    print("Client Secret:", client_secret)

    auth_url = "https://accounts.spotify.com/api/token"
    auth_header = base64.b64encode((client_id + ":" + client_secret).encode())
    headers = {
        "Authorization": f"Basic {auth_header.decode()}"
    }
    payload = {
        "grant_type": "client_credentials"
    }
    response = requests.post(auth_url, headers=headers, data=payload)
    if response.status_code == 200:
        return response.json()['access_token']
    else:
        return None

# Django view to get top artists
def top_artists(request):
    client_id = os.getenv("SPOTIFY_CLIENT_ID", None)
    client_secret = os.getenv("SPOTIFY_CLIENT_SECRET", None)

    token = get_spotify_token(client_id, client_secret)
    if token:
        headers = {
            "Authorization": f"Bearer {token}"
        }
        # Calculate the date of one month ago
        last_month_date = (datetime.now() - timedelta(days=30)).isoformat()
        print("Last month date:", last_month_date)

        # Replace with the appropriate Spotify API endpoint
        #spotify_endpoint = f"https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10"
        #spotify_endpoint = f"https://api.spotify.com/v1/me/albums/contains?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C4aawyAB9vmqN3uQ7FjRGTy%2C63rPSO264uRjW1X5E6cWv6"
        #spotify_endpoint = f"https://api.spotify.com/v1/me/albums/contains"
        spotify_endpoint = f"https://api.spotify.com/v1/me"
        response = requests.get(spotify_endpoint, headers=headers)
        print(response.json())

        if response.status_code == 200:
            return JsonResponse(response.json(), safe=False)
        else:
            return JsonResponse({'error': 'Failed to fetch data from Spotify.'}, status=500)
    else:
        return JsonResponse({'error': 'Failed to authenticate with Spotify.'}, status=500)
