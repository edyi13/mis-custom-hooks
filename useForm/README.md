# useForm


Ejemplo de uso:

```
  const initialForm = {
      name: '',
      age: 0,
      email: ''
  };
  const [ formValues, handleImputChange, reset ] = useForm( initialForm );
```