# ServerSide Rendering with Locale

``` 
npm install
npm run build:ssr
npm run serve:ssr
```

Open `http://localhost:4000`

Note bug in the console where you ran `npm` 

```
Node server listening on http://localhost:4000
ERROR Error: Missing locale data for the locale "fr-FR".
```

Do 'View page source' (CTRL+U)  in the browser:

You will see the values are not interpolated with the pipes:

```
    Date Example:
    <div>
      </div>

    <br>
    Number Example:
    <div>
      </div>

    <br>
    Currency Example:
    <div>
      </div>
```

Repeat the same steps for English:

```
npm run build:ssr:en
npm run serve:ssr
```

Node server listening on http://localhost:4000
You should see no error for a missing locale in the CMD or Bash console.

Do 'View page source' (CTRL+U)  in the browser:

You will see the values ARE interpolated with the pipes:

```
    Date Example:
    <div>
      Mar 17, 2018
    </div>

    <br>
    Number Example:
    <div>
      123,456,789
    </div>

    <br>
    Currency Example:
    <div>
      €987,654.33
    </div>
```