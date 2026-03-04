import fs from "fs";
import path from "path";

// Path to the wishes file
const wishesFilePath = path.join(process.cwd(), "src", "api", "wishes.js");

// Helper function to read wishes from file
function readWishes() {
  try {
    const fileContent = fs.readFileSync(wishesFilePath, "utf-8");
    // Extract the array from the exported array
    const match = fileContent.match(/const wishes = \[([\s\S]*?)\];/);
    if (match) {
      const arrayContent = "[" + match[1] + "]";
      return JSON.parse(arrayContent);
    }
    return [];
  } catch (error) {
    console.error("Error reading wishes file:", error);
    return [];
  }
}

// Helper function to write wishes to file
function writeWishes(wishes) {
  try {
    const wishesJSON = JSON.stringify(wishes, null, 2);
    const fileContent = `const wishes = ${wishesJSON};\n\nexport default wishes;\n`;
    fs.writeFileSync(wishesFilePath, fileContent, "utf-8");
  } catch (error) {
    console.error("Error writing wishes file:", error);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.wish) {
      return Response.json(
        { error: "Name and wish are required" },
        { status: 400 }
      );
    }

    // Read existing wishes
    let wishes = readWishes();

    // Add timestamp to the wish
    const wish = {
      id: Date.now(),
      ...data,
      timestamp: new Date().toISOString(),
    };

    wishes.push(wish);

    // Write updated wishes to file
    writeWishes(wishes);

    return Response.json(
      { success: true, message: "Wish saved successfully", wish },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving wish:", error);
    return Response.json(
      { error: "Failed to save wish" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const wishes = readWishes();
    return Response.json(
      { success: true, data: wishes },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving wishes:", error);
    return Response.json(
      { error: "Failed to retrieve wishes" },
      { status: 500 }
    );
  }
}
