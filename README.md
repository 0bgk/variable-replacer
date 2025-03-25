# Variable Replacer

This Node.js application replaces environment variables of template files. It reads files from the `templates` directory, replaces placeholders with values from the `.env` file, and saves the processed files in the `dist` directory.

## Features
- Reads template files from `templates/`
- Replaces placeholders (`{{process.env.VARIABLE_NAME}}`) with values from `.env`
- Saves modified files in `dist/`

## Installation

1. Install dependencies:
   ```sh
   yarn install
   ```

2. Create a `.env` file and define your variables:
   ```env
   APP_METAFIELD_ID="gid://shopify/Metafield/1234567890"
   ```

## Usage

### Run the script
To process templates and replace variables:
```sh
yarn dev
```

### Example
#### Input (`templates/brand.liquid`):
```liquid
<div>
  <span>
    {{ product.metafields[{{process.env.APP_METAFIELD_ID}}].data.name }}
  </span>
</div>
```

#### Output (`dist/brand.liquid`):
```liquid
<div>
  <span>
    {{ product.metafields['gid://shopify/Metafield/1234567890'].data.name }}
  </span>
</div>
```

## How It Works
1. Reads all files from `templates/`
2. Searches for placeholders in the format `{{process.env.VARIABLE_NAME}}`
3. Replaces them with the corresponding value from `.env`
4. Saves the modified file in `dist/`

## License
This project is open-source and available under the MIT License.

