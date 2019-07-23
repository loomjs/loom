### Registry API

**Register a module**
----
  Registers a module in Loom Registry.

* **URL**

  /modules/

* **Method:**

  `POST`

* **Data Params**

  name - string - Module name
  bundle - string - Url to the module bundle



* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Advertisment Widget" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Wrong payload" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

``` curl  ```
