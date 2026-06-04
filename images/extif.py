from exiftool import ExifToolHelper
with ExifToolHelper() as et:
    for d in et.get_metadata("./500/DSC00236.jpg"):
        for k, v in d.items():
            print(f"Dict: {k} = {v}")
