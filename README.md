# Migration To AndroidX Tool

AndroidX replaces the original support library APIs with packages in the androidx namespace. Thus, there might be XML/JS files must to migrate to AndroidX. Such as,AndroidManifest.xml files or if codebase/third-party libs contains previously used [Native API Access](https://developer.smartface.io/docs/accessing-native-apis) then migration will be necessary in order to use newer version of player emulator.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install sf-androidx-migration.

```bash
npm install sf-androidx-migration -g
```

## Usage

```javascript
node --max-old-space-size=2048 sf-androidx-migration $ProjectPath
```
If trying to migrate Smartface WS, to save the time, instead of assigning root of project(as project path) we recommended to check below folders;
- ~/workspace/config
- ~/workspace/scripts

Note: We recommend working in a separate branch when migrating. Also try to avoid refactoring your code while performing the migration.
 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)