import requests
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

token = config['scriptsettings']['token']

records = []

base_url = 'https://api.safetyculture.io'
url_append = '/feed/inspections?archived=false&completed=true'

headers = {
    "accept": "application/json",
    "sc-integration-id": "sc-readme",
    "authorization": "Bearer " + token 
}

def get_data(url,headers):
    try:
        response = requests.get(url,headers = headers)
        response.raise_for_status()

        data = response.json()

        for item in data['data']:
            records.append(item['id'])

        next_page_path = data.get('metadata', {}).get('next_page')
        if next_page_path:
            return base_url + next_page_path
        return None

    except requests.RequestException as e:
        print(f"An error occurred: {e}")
        return None

next_page_url = base_url + url_append
while next_page_url:
    next_page_url = get_data(next_page_url, headers)

#process non-archived
for record in records:
    url = f'https://api.safetyculture.io/inspections/v1/inspections/{record}/archive'
    response = requests.post(url, headers=headers)
    
    if response.status_code == 200:
        print(f'Successfully archived record {record}')
    else:
        print(f'Failed to archive record {record}. Status code: {response.status_code}, Response: {response.text}')

#process archived
for record in records:
    url = f'https://api.safetyculture.io/inspections/v1/inspections/{record}'
    response = requests.delete(url, headers=headers)
    
    if response.status_code == 200:
        print(f'Successfully deleted record {record}')
    else:
        print(f'Failed to delete record {record}. Status code: {response.status_code}, Response: {response.text}')