Default Button with default width

```js
<Button />
```

Success Button Flat and Raised

```js
<div style={{ display: "flex", justifyContent: "space-around" }}>
  <Button
    variants="success"
    type="flat"
    btnText="FLAT"
    handleClick={() => console.log("clicked flat")}
    width="150px"
  />
  <Button
    variants="success"
    type="raised"
    btnText="RAISED"
    handleClick={() => console.log("clicked raised")}
    width="150px"
  />
</div>
```

Error Button Flat and Raised

```js
<div style={{ display: "flex", justifyContent: "space-around" }}>
  <Button
    variants="error"
    btnText="FLAT"
    handleClick={() => console.log("clicked flat")}
    type="flat"
    width="150px"
  />
  <Button
    variants="error"
    btnText="RAISED"
    handleClick={() => console.log("clicked raised")}
    type="raised"
    width="150px"
  />
</div>
```
