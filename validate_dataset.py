from pathlib import Path
from PIL import Image
import os
root = Path('dataset')
classes = ['glioma','meningioma','pituitary','notumor']
for split in ['Training','Testing']:
    print(f'[{split}]')
    for cls in classes:
        p = root / split / cls
        files = sorted([x for x in p.iterdir() if x.is_file()])
        print(cls, len(files))
        for f in files:
            try:
                with Image.open(f) as im:
                    im.verify()
            except Exception as e:
                print('bad', f.name, e)
                os.remove(f)
