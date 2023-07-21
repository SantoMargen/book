# job-hunt

## Table of Contents

1. [How To Use](#how-to-use)
2. [Requirement](#requirement)
3. [Services](#services)

<a name="how-to-use"></a>

## How To Use

- To Run job-hunt

  1. clone [ Repo job-hunt](https://github.com/SantoMargen/job-hunt)
  2. create manual DataBase
  3. create manual Table
  4. install all package with command `npm install`
  5. run service with command `npm run dev`
  6. visit [http://localhost:4000](http://localhost:3000) (if you can visit this that means all good to go!)

<a name="requirement"></a>

## Requirement

- nodejs [Nodejs Web](https://nodejs.org/en)

<a name="services"></a>

## Services

All nodejs services related is serve on docker using `nodemon` as a changes' watcher for hot reload support.

### job-hunt service

- server [`http://localhost:4000`](http://localhost:4000)

### list endpoint

#### endpoint user

| Type   | Path             | Description                     |
| :----- | :--------------- | :------------------------------ |
| `POST` | '/user/register' | [Register user](#register-user) |
| `POST` | '/user/login'    | [Login user](#login-user)       |

#### endpoint kota

| Type  | Path    | Description                             |
| :---- | :------ | :-------------------------------------- |
| `GET` | '/kota' | [Get All list Kota](#get-all-list-kota) |

#### endpoint provinsi

| Type  | Path          | Description                                     |
| :---- | :------------ | :---------------------------------------------- |
| `GET` | '/provincies' | [Get All list Provinsi](#get-all-list-provinsi) |

#### endpoint DataPegawai

| Type     | Path                           | Description                                                                                |
| :------- | :----------------------------- | :----------------------------------------------------------------------------------------- |
| `POST`   | '/data/pegawai'                | [Create Data Pegawai](#create-data-pegawai)                                                |
| `GET`    | 'data/pegawai'                 | [Get all list data pegawai](#get-all-list-data-pegawai)                                    |
| `GET`    | '/data/pegawai/:id'            | [Get detail pegawai with id `:id`](#get-detail-pegawai-with-id)                            |
| `PATCH`  | '/data/pegawai/:id'            | [Update Data pegawai with id `:id`](#update-data-pegawai-with-id)                          |
| `DELETE` | '/data/pegawai/:id'            | [Delete Data Pegawai with id `:id`](#delete-data-pegawai-with-id)                          |
| `GET`    | '/data/pegawai/sertifikat/:id' | [Get Data Pegawai Sertifikat With Id User`:id`](#get-data-pegawai-sertifikat-with-id-user) |

#### endpoint bidang

| Type     | Path          | Description                                                     |
| :------- | :------------ | :-------------------------------------------------------------- |
| `POST`   | '/bidang'     | [Create Data Bidang](#create-data-bidang)                       |
| `GET`    | '/bidang/:id' | [Get detail Bidang with id `id`](#get-detailbidang-with-bidang) |
| `GET`    | 'bidang'      | [Get all list Bidang](#get-all-list-bidang)                     |
| `PATCH`  | '/bidang/:id' | [Update Bidang with id `:id`](#update-bidang-with-id)           |
| `DELETE` | '/bidang/:id' | [Delete Bidang with id `:id`](#delete-bidang-with-id)           |

#### endpoint sertifikasi

| Type     | Path                       | Description                                                |
| :------- | :------------------------- | :--------------------------------------------------------- |
| `POST`   | '/sertifikasi/pegawai'     | [Create Sertifikasi](#create-sertifikasi)                  |
| `DELETE` | '/sertifikasi/pegawai/:id' | [Delete sertifikat with id `id`](#delete-sertikat-with-id) |

## Login User

[Back to list of API](#list-endpoint)

```http
  POST /user/login
```

| Body       | Type     | Description  |
| :--------- | :------- | :----------- |
| `Email`    | `string` | **Required** |
| `Password` | `string` | **Required** |

### Response

#### OK

```json
{
	"access_token": "string"
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Register user

[Back to list of API](#list-endpoint)

```http
  POST /user/register
```

| Body       | Type     | Description  |
| :--------- | :------- | :----------- |
| `Email`    | `string` | **Required** |
| `Password` | `string` | **Required** |
| `Username` | `string` | **Required** |

### Response

#### OK

```json
{
	"Id_User": "STRING",
	"Email": "STRING",
	"Username": "STRING",
	"Token": "STRING"
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Get All list Kota

[Back to list of API](#list-endpoint)

```http
  GET /kota
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

### Response

#### OK

```json
[
	 {
        "Kd_Kota": "STRING",
        "Kd_Provinsi": "STRING",
        "NamaKota": "STRING",
        "Created_at": "DATE",
        "Modified_at": "DATE,
        "Deleted_at": "DATE
    },
    {
        "Kd_Kota": "STRING",
        "Kd_Provinsi": "STRING",
        "NamaKota": "STRING",
        "Created_at": "DATE",
        "Modified_at": "DATE,
        "Deleted_at": "DATE
    },
    ...
]
```

### Error

```json
{
	"message": "STRING"
}
```

## Get All list Provinsi

[Back to list of API](#list-endpoint)

```http
  GET /provincies
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

### Response

#### OK

```json
[
	  {
        "Kd_Provinsi": "STRING",
        "NamaProvinsi": "STRING",
        "Kd_Region": "STRING",
        "Created_at": "DATE",
        "Modified_at": "DATE,
        "Delete_at": "DATE"
    },
    {
        "Kd_Provinsi": "STRING",
        "NamaProvinsi": "STRING",
        "Kd_Region": "STRING",
        "Created_at": "DATE",
        "Modified_at": "DATE,
        "Delete_at": "DATE"
    },
    ...
]
```

### Error

```json
{
	"message": "STRING"
}
```

## Create Data Pegawai

[Back to list of API](#list-endpoint)

```http
  POST /data/pegawai
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Body               | Type     | Description  |
| :----------------- | :------- | :----------- |
| `NamaLengkap`      | `string` | **Required** |
| `Tanggal`          | `string` | **Required** |
| `AlamatLengkap`    | `string` | **Required** |
| `NamaLengkap`      | `string` | **Required** |
| `Keahlian`         | `string` | **Optional** |
| `LevelPekerjaan`   | `string` | **Optional** |
| `Kd_Provinsi`      | `string` | **Required** |
| `Kd_KotaKabupaten` | `string` | **Required** |
| `Kodepos`          | `string` | **Required** |

### Response

#### OK

```json
{
	"Id_Pegawai": "STRING",
	"NamaLengkap": "STRING",
	"Tanggal": "DATE",
	"Umur": "STRING",
	"AlamatLengkap": "STRING",
	"Keahlian": "STRING",
	"LevelPekerjaan": "STRING",
	"Kd_Provinsi": "STRING",
	"Kd_KotaKabupaten": "STRING",
	"Kodepos": "STRING",
	"Created_at": "DATE"
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Get all list data pegawai

[Back to list of API](#list-endpoint)

```http
  GET /data/pegawai
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

### Response

#### OK

```json
[
	    {
        "Id_Pegawai": "STRING",
        "NamaLengkap": "STRING",
        "Tanggal": "Date",
        "Umur": "STRING,
        "AlamatLengkap": "Jl.Keningan raya no.56 ",
        "Keahlian": "STRING",
        "LevelPekerjaan": STRING",
        "Kd_Provinsi": "STRING",
        "Kd_KotaKabupaten": "STRING",
        "Kodepos": "STRING",
        "Created_at": "DATE"
    },
      {
        "Id_Pegawai": "STRING",
        "NamaLengkap": "STRING",
        "Tanggal": "Date",
        "Umur": "STRING,
        "AlamatLengkap": "Jl.Keningan raya no.56 ",
        "Keahlian": "STRING",
        "LevelPekerjaan": STRING",
        "Kd_Provinsi": "STRING",
        "Kd_KotaKabupaten": "STRING",
        "Kodepos": "STRING",
        "Created_at": "DATE"
    },
    ...
]
```

### Error

```json
{
	"message": "STRING"
}
```

## Get detail pegawai with id

[Back to list of API](#list-endpoint)

```http
  GET /data/pegawai/:id
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `STRING` | **Required**. Id of User Pegawai |

### Response

#### OK

```json
{
    "Id_Pegawai": "STRING",
    "NamaLengkap": "STRING",
    "Tanggal": "Date",
    "Umur": "STRING,
    "AlamatLengkap": "Jl.Keningan raya no.56 ",
    "Keahlian": "STRING",
    "LevelPekerjaan": STRING",
    "Kd_Provinsi": "STRING",
    "Kd_KotaKabupaten": "STRING",
    "Kodepos": "STRING",
    "Created_at": "DATE"
    }
```

### Error

```json
{
	"message": "STRING"
}
```

## Update Data pegawai with id

[Back to list of API](#list-endpoint)

```http
  PATCH /data/pegawai/:id
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `id`      | `STRING` | **Required**. Id of data pegawai to update to change |

| Body               | Type     | Description  |
| :----------------- | :------- | :----------- |
| `NamaLengkap`      | `string` | **Optional** |
| `Tanggal`          | `string` | **Optional** |
| `AlamatLengkap`    | `string` | **Optional** |
| `NamaLengkap`      | `string` | **Optional** |
| `Keahlian`         | `string` | **Optional** |
| `LevelPekerjaan`   | `string` | **Optional** |
| `Kd_Provinsi`      | `string` | **Optional** |
| `Kd_KotaKabupaten` | `string` | **Optional** |
| `Kodepos`          | `string` | **Optional** |

### Response

#### OK

```json
{
"message": STRING,
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Delete Data Pegawai with id

[Back to list of API](#list-endpoint)

```http
  DELETE /data/pegawai/:id
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of User to delete |

### Response

#### OK

```json
{
"message": STRING,
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Get Data Pegawai Sertifikat With Id User

[Back to list of API](#list-endpoint)

```http
  GET /data/pegawai/sertifikat/:id
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `id`      | `STRING` | **Required**. Id of data pegawai |

### Response

#### OK

```json
{
	"Id_Pegawai": "STRING",
	"NamaLengkap": "STRING",
	"Tanggal": "DATE",
	"Umur": "STRING",
	"AlamatLengkap": "STRING",
	"Keahlian": "STRING",
	"LevelPekerjaan": "STRING",
	"Kd_Provinsi": "STRING",
	"Kd_KotaKabupaten": "STRING",
	"Kodepos": "STRING",
	"Created_at": "DATE",
	"dataPegawai": [
		{
			"Id_Sertifikasi": "STRING",
			"Id_Pegawai": "STRING",
			"NamaLembaga": "STRING",
			"Id_Bidang": "B1",
			"DokumentasiSertifikat": "STRING",
			"Created_at": "DATE"
		},
		{
			"Id_Sertifikasi": "STRING",
			"Id_Pegawai": "STRING",
			"NamaLembaga": "STRING",
			"Id_Bidang": "B1",
			"DokumentasiSertifikat": "STRING",
			"Created_at": "DATE"
		}
	]
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Create Data Bidang

[Back to list of API](#list-endpoint)

```http
  POST /bidang
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Body         | Type     | Description  |
| :----------- | :------- | :----------- |
| `NamaBidang` | `string` | **Optional** |

### Response

#### OK

```json
{
	"Id_Bidang": "STRING",
	"NamaBidang": "STRING",
	"Created_at": "DATE"
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Get detail Bidang with id

[Back to list of API](#list-endpoint)

```http
  GET /bidang/:id
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `STRING` | **Required**. Id of bidang |

### Response

#### OK

```json
{
	"Id_Bidang": "STRING",
	"NamaBidang": "STRING",
	"Created_at": "DATE"
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Get all list Bidang

[Back to list of API](#list-endpoint)

```http
  GET /bidang
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

### Response

#### OK

```json
[
	{
		"Id_Bidang": "STRING",
		"NamaBidang": "STRING",
		"Created_at": "DATE"
	},
    {
		"Id_Bidang": "STRING",
		"NamaBidang": "STRING",
		"Created_at": "DATE"
	},
    {
		"Id_Bidang": "STRING",
		"NamaBidang": "STRING",
		"Created_at": "DATE"
	},
    ...
]
```

### Error

```json
{
	"message": "STRING"
}
```

## Update Bidang with id

[Back to list of API](#list-endpoint)

```http
  PATCH /bidang/:id
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `STRING` | **Required**. Id of bidang |

| Body         | Type     | Description  |
| :----------- | :------- | :----------- |
| `NamaBidang` | `string` | **Optional** |

### Response

#### OK

```json
{
	"message": "STRING"
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Delete Bidang with id

[Back to list of API](#list-endpoint)

```http
  DELETE /bidang/:id
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `STRING` | **Required**. Id of bidang |

### Response

#### OK

```json
{
	"message": "STRING"
}
```

### Error

```json
{
	"message": "STRING"
}
```

## Create Sertifikasi

[Back to list of API](#list-endpoint)

```http
  POST /sertifikasi/pegawai
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Body                    | Type     | Description  |
| :---------------------- | :------- | :----------- |
| `Id_Pegawai`            | `string` | **Required** |
| `NamaLembaga`           | `string` | **Required** |
| `AlamatLengkap`         | `string` | **Required** |
| `DokumentasiSertifikat` | `file`   | **Required** |

### Response

#### OK

```json
{
	"message": "STRING"
}
```

### Error

```json
{
	"Id_Sertifikasi": "STRING",
	"Id_Pegawai": "STRING",
	"NamaLembaga": "STRING",
	"Id_Bidang": "STRING",
	"DokumentasiSertifikat": "STRING",
	"Created_at": "STRING"
}
```

## Delete sertifikat with id

[Back to list of API](#list-endpoint)

```http
  POST /sertifikasi/pegawai
```

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `id`      | `STRING` | **Required**. Id of data pegawai to update to change |

### Response

#### OK

```json
{
	"message": "STRING"
}
```

### Error

```json
{
	"message": "STRING"
}
```
