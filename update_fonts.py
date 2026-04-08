import os
import re

directories = ['/Users/kunalsharma/Desktop/unfoldxr/components']

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    def replacer(match):
        block = match.group(0)
        block = re.sub(r'\b60\b', '54', block)
        block = re.sub(r'\b32\b', '28', block)
        return block

    new_content = re.sub(r'fontSize:\s*\{?[^}]+\}?', replacer, content)
    
    # Let's be a bit more robust:
    def block_replacer(match):
         val = match.group(0)
         val = re.sub(r'(?<![A-Za-z0-9_])60(?![A-Za-z0-9_])', '54', val)
         val = re.sub(r'(?<![A-Za-z0-9_])32(?![A-Za-z0-9_])', '28', val)
         return val
         
    new_content = re.sub(r'fontSize:\s*(?:\{[^}]+\}|\d+|["\']\d+px["\'])', block_replacer, content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print("Updated:", filepath)

for directory in directories:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                process_file(os.path.join(root, file))

print("Done font updates!")
