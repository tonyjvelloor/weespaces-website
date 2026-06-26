import re

with open('src/data/locations.ts', 'r') as f:
    content = f.read()

images = {
    'kochi': "['/images/branches/kochi/workspace1.jpg', '/images/branches/kochi/workspace2.jpg', '/images/branches/kochi/workspace3.jpg', '/images/branches/kochi/workspace4.jpg']",
    'calicut': "['/images/branches/calicut/reception.jpg', '/images/branches/calicut/workspace1.jpg', '/images/branches/calicut/workspace2.jpg', '/images/calicut_coworking.jpg']",
    'trivandrum': "['/images/branches/trivandrum/image1.jpg', '/images/branches/trivandrum/image2.jpg', '/images/branches/trivandrum/image3.jpg', '/images/branches/trivandrum/image4.jpg']",
    'coimbatore': "['/images/branches/coimbatore/exterior-tall.jpg', '/images/branches/coimbatore/amenity1.jpg', '/images/branches/coimbatore/amenity2.jpg', '/images/branches/coimbatore/amenity3.jpg']",
}

# The cities object contains city objects. We can split by `id: 'kochi'` etc.
def replace_gallery_for_city(content, city_id, new_gallery_str):
    # Find the start of the city
    city_start = content.find(f"id: '{city_id}'")
    if city_start == -1: return content
    
    # We want to replace all gallery arrays up to the next city start or the end of the cities block.
    # A simple way is to find the next city id, but let's just do it manually.
    
    # We'll split the content into parts: before city, the city block, after city block
    parts = re.split(r"(id: '(?:kochi|calicut|trivandrum|coimbatore)')", content)
    
    # Find our city block
    for i in range(1, len(parts), 2):
        if parts[i] == f"id: '{city_id}'":
            # The next part is the content for this city
            parts[i+1] = re.sub(r"gallery: \['[^\]]+'\]", f"gallery: {new_gallery_str}", parts[i+1])
    
    return "".join(parts)

for city, gallery_str in images.items():
    content = replace_gallery_for_city(content, city, gallery_str)

with open('src/data/locations.ts', 'w') as f:
    f.write(content)

print("Images fixed!")
