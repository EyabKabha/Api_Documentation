from git.repo.base import Repo
import shutil
import json

json_file = open('./demo/config-repo/Repo.json', "r")

data = json.loads(json_file.read())

for i in data:
    try:
        destination = './demo/ClonedProjects/YamlsAPIs/'
        repo_name = i['Repo'].split('/')[-1]
        Repo.clone_from(i['Repo'], f'./demo/ClonedProjects/{repo_name}')
        for path in i['paths']:
            source = f'./demo/ClonedProjects/{repo_name}/{path}'
            shutil.copy(source, destination)
    except FileNotFoundError:
        print('File not found')