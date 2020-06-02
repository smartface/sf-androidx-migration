# Migration To AndroidX Tool

AndroidX replaces the original support library API's with packages in the androidx namespace. Thus, there might be XML/JS files to be migrated to AndroidX. Such as, AndroidManifest.xml or if codebase/third-party libraries contain previously used [native API's](https://developer.smartface.io/docs/accessing-native-apis) then migration will be necessary in order to use newer version of the SF player.

## Installation

Migration tool can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE. Run the following code in terminal:

```bash
(cd /projects/workspace && npm install --save-dev sf-androidx-migration)
```

## Usage

```javascript
node --max-old-space-size=2048 /projects/workspace/node_modules/sf-androidx-migration/index.js /projects/workspace/workspace/scripts/
node --max-old-space-size=2048 /projects/workspace/node_modules/sf-androidx-migration/index.js /projects/workspace/config/
```

### ❗Important Note❗

We recommend working in a separate branch when migrating. Also try to avoid refactoring your code while performing the migration.
 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
