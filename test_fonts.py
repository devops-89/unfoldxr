import re

text = """
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 26, md: 50, lg: 60 },
            lineHeight: { xs: "40px", md: "92px" },
          }}
        >
"""

def block_replacer(match):
     val = match.group(0)
     val = re.sub(r'(?<![A-Za-z0-9_])60(?![A-Za-z0-9_])', '54', val)
     val = re.sub(r'(?<![A-Za-z0-9_])32(?![A-Za-z0-9_])', '28', val)
     return val
     
new_content = re.sub(r'fontSize:\s*(?:\{[^}]+\}|\d+|["\']\d+px["\'])', block_replacer, text)
print(new_content)
