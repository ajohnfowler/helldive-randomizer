import os

folders = ['primaries', 'secondaries', 'throwables', 'stratagems', 'boosters']

substrings = ['_Primary_Weaponry', '_Secondary_Weaponry', '_Throwable_Weaponry', '_Booster_Icon', '_Stratagem_Icon']

for folder in folders:
    directory = '../public/images/' + folder + '/'
    for name in os.listdir(directory):
        new_name = name
        for s in substrings:
            new_name = new_name.replace(s, '')
        os.rename(directory + name, directory + new_name)
        print (name, new_name)