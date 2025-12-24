import os

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if file needs fixing
    if 'onPointerLeaveCapture={() => {}}' in content and 'onResize={() => {}}' not in content:
        # Replace the pattern
        new_content = content.replace(
            'onPointerLeaveCapture={() => {}}',
            'onPointerLeaveCapture={() => {}}\n                onResize={() => {}}\n                onResizeCapture={() => {}}'
        )
        
        # Write back
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")
    else:
        print(f"Skipped {filepath}")

# List of files from grep result
files = [
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/checkout.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/track-order.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/signup.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/signin.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/cart.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/contact.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/about.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/shop.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/index.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/pages/product/[slug].tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/components/Footer.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/components/Header.tsx',
    '/Users/akshanshupal/Downloads/GiftWrap/src/components/ProductCard.tsx'
]

for file in files:
    try:
        fix_file(file)
    except Exception as e:
        print(f"Error processing {file}: {e}")
