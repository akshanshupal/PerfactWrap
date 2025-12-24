import re

filepath = '/Users/akshanshupal/Downloads/GiftWrap/src/components/Footer.tsx'

with open(filepath, 'r') as f:
    lines = f.readlines()

new_lines = []
skip = False

for i, line in enumerate(lines):
    new_lines.append(line)
    if 'onPointerLeaveCapture={() => {}}' in line:
        # Check if next lines already have onResize
        has_resize = False
        if i + 1 < len(lines) and 'onResize={() => {}}' in lines[i+1]:
            has_resize = True
        
        if not has_resize:
            # Detect indentation
            indent = line[:line.find('onPointerLeaveCapture')]
            new_lines.append(f'{indent}onResize={{() => {{}}}}\n')
            new_lines.append(f'{indent}onResizeCapture={{() => {{}}}}\n')

with open(filepath, 'w') as f:
    f.writelines(new_lines)

print(f"Fixed {filepath}")
