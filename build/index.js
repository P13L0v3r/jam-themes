const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const UNLOCK_DATE = new Date("2025-07-27T14:00:00-05:00"); // change as needed

app.get("/", (req, res) => {
  const now = new Date();

  if (now < UNLOCK_DATE) {
    const themes = process.env.JAM_THEMES.split(",");
    const ulHtml = `<ul>
      ${themes.map((item) => `<li>${item}</li>`).join("\n")}
      </ul>`;
    res.send(`
      <html>
        <body style="font-family:Arial; background-color:#150e20; color:#c8d2f3;">
          <h2>The 1:1 Jam themes have not been revealed yet!</h2>
          <p>The themes will look something like this:</p>
          ${ulHtml}
          <p>Come back when the jame starts!</p>
        </body>
      </html>
    `);
  } else {
    const themes = process.env.JAM_THEMES.split(",");
    const ulHtml = `<ul>
      ${themes.map((item) => `<li>${item}</li>`).join("\n")}
      </ul>`;
    res.send(`
      <html>
        <body style="font-family:Arial; background-color:#150e20; color:#c8d2f3;">
          <h2>The 1:1 Jam themes are:</h2>
          ${ulHtml}
          <p>Good luck!</p>
        </body>
      </html>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
