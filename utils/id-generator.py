import os, json, uuid

json_files = ['primaries.json', 'secondaries.json', 'throwables.json', 'stratagems.json', 'boosters.json']

ids = []

for file in json_files:
    filename = '../src/assets/' + file
    with open(filename) as f:
        data = json.load(f)

        for group in data['items']:
            for item in group['items']:
                if 'id' not in item:
                    item['id'] = group['name'][0].lower() + str(uuid.uuid4())[:3]
    
    # create randomly named temporary file to avoid 
    # interference with other thread/asynchronous request
    tempfile = os.path.join(os.path.dirname(filename), str(uuid.uuid4()))
    with open(tempfile, 'w') as f:
        json.dump(data, f, indent=4)

    # rename temporary file replacing old file
    os.remove(filename)
    os.rename(tempfile, filename)