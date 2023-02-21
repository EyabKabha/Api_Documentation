import os
import ruamel.yaml

yaml = ruamel.yaml.YAML()

path = './demo/init/Services'

with open(f'./demo/init/default.yaml') as fp:
    default_file = yaml.load(fp)

default_file['paths'] = {}
default_file['components']['schemas'] = {}

for filenames in os.listdir(path):
    with open(f'./demo/init/Services/{filenames}') as file:
        dataFiles = yaml.load(file)
        for i in dataFiles['paths']:
            print(i)
            default_file['paths'].update({
                i: dataFiles['paths'][i]
            })
        
        try:
            for i in dataFiles['components']['schemas']:
                default_file['components']['schemas'].update({
                    i: dataFiles['components']['schemas'][i]
                })
        except KeyError:
            print("Key is unknown.")
    yaml.dump((default_file), open(f'./demo/openapi.yaml', 'w'))

