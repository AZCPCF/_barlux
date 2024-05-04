// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from 'react-hook-form'; // Import yupResolver directly from react-hook-form
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string().email('Email is invalid').required('Email is required'),
//   age: yup.number().required('Age is required').min(18, 'You must be at least 18 years old'),
// });

// function UserInfoPage() {
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema), // Use yupResolver to integrate Yup with React Hook Form
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     // Here you can handle submitting the form data, like sending it to a server or storing it in state
//   };

//   return (
//     <div>
//       <h1>User Info</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" ref={register} />
//           {errors.name && <span>{errors.name.message}</span>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="text" name="email" ref={register} />
//           {errors.email && <span>{errors.email.message}</span>}
//         </div>
//         <div>
//           <label>Age:</label>
//           <input type="number" name="age" ref={register} />
//           {errors.age && <span>{errors.age.message}</span>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UserInfoPage;
import React from 'react'

export default function Test() {
  return (
    <div>Test</div>
  )
}
