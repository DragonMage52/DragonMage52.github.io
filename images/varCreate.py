from exiftool import ExifToolHelper
import os

folder_path = "./grid"
imageVariable = "var imageList = ["
tagsList = ["File:ImageWidth", "File:ImageHeight", "EXIF:CreateDate", "EXIF:GPSLatitudeRef", "EXIF:GPSLatitude", "EXIF:GPSLongitudeRef", "EXIF:GPSLongitude", "XMP-dc:Subject", "XMP-iptcCore:Location", "XMP-dc:Title", "XMP-dc:Description"]
i = 0

with ExifToolHelper() as et:
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path):
            if "_400" in filename:
            # Perform operations on the file
                clean = filename.split("_")[0] + "." + filename.split(".")[-1]
                
                if i <1:
                    imageVariable = imageVariable + "{ name: \"" + clean + "\""
                    i = i + 1
                else:
                    imageVariable = imageVariable + ",{ name: \"" + clean + "\""

                for d in et.get_tags(file_path, tags=tagsList):
                    for k, v in d.items():

                        if ":" in k:
                            tagName = k.split(":")[1]
                            tagName = tagName.replace("-", "")
                        else:
                            tagName = k

                        if isinstance(v, str):
                            imageVariable = imageVariable + ", " + tagName + ": \"" + v + "\""
                        else:
                            imageVariable = imageVariable + ", " + tagName + ": " + str(v)
                    
                    
                imageVariable = imageVariable + "}"

imageVariable = imageVariable + "];"
print(imageVariable)
