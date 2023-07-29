
    // try {
    //   // const response = await axios.post<{ access_token: string }>(
    //   //   'http://localhost:8888/users/login',
    //   //   {
    //   //     username,
    //   //     password,
    //   //   }
    //   // );
    //   const response = await fetch('http://localhost:8888/users/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password,
    //     }),
    //   });
    //   const data = await response.json();
    //   const { access_token } = data;
    //   localStorage.setItem('jwtToken', access_token);
    //   router.push('/dashboard');
    // } catch (error: any) {
    //   setPassword('')
    //   setUsername('')
    //   setErrorMessage(error.response.data.message);
    // }