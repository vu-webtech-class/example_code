# Set your lab number here
labNumber := 0

# Pad the lab number with leading zeros
labNumberPadded := $(shell printf "%03d" $(labNumber))

# Define the output file names based on labNumber variable
a1_zip := a1-lab${labNumberPadded}.zip
a2_zip := a2-lab${labNumberPadded}.zip
a3_zip := a3-lab${labNumberPadded}.zip

A1_FILES := a1-markup/index.html a1-markup/style.css a1-markup/report.md
A2_FILES := a2-scripting
A3_FILES := a3-server --exclude=a3-server/node_modules/* --exclude=a3-server/package-lock.json --exclude=a3-server/gallery.db

# Default target: specify the target you want to build when you run just "make"
all: a1 a2 a3

# Rule to create a1 zip file
a1:
	zip -r $(a1_zip) $(A1_FILES)

# Rule to create a2 zip file
a2:
	zip -r $(a2_zip) $(A2_FILES)

# Rule to create a3 zip file
a3:
	zip -r $(a3_zip) $(A3_FILES)

# Clean rule to remove the zip files
clean:
	rm -f $(a1_zip) $(a2_zip) $(a3_zip)
