import csv, json

data = []

with open("data.csv", "r") as infile:
    reader = csv.DictReader(infile)
    for row in reader:
        data.append(row)
 
with open("data.json", "w") as outfile:
    json.dump(data, outfile)