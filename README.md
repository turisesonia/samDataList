# samDataList

需求 :

  - jQuery
  - Bootstrap

使用說明 :
  - 將select element轉換成可以自訂的datalist，並可做like search

Eample :

### HTML
```sh
<select id="s1" class="form-control">
    <option>apple</option>
    <option>bird</option>
    <option>cat</option>
</select>
```
### jQuery
```sh
<script>
    // samDataList param2 is input tag id
    $("#s1").samDataList("init", "input_id");
</script>
```