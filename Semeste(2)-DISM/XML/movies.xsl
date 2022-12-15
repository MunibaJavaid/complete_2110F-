<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

  <html>
  <body>
  <h2>My Movies Collection</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Name</th>
      <th>Year</th>
      <th>Genre</th>
    </tr>


    <xsl:for-each select="collection/movie">
    
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="year"/></td>
      <td><xsl:value-of select="genre"/></td>
    </tr>
    </xsl:for-each>

  </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>