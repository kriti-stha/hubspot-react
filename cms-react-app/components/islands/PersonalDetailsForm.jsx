import React, { useState } from 'react';

const PersonalDetailsForm = ({}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Here you can add your form submission logic
      console.log('Form submitted:', formData);
      setStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      {'hi'}
    </div>
    // <div className="w-full max-w-2xl mx-auto">
    //   {status === 'success' ? (
    //     <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
    //       {successMessage}
    //     </div>
    //   ) : status === 'error' ? (
    //     <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
    //       {errorMessage}
    //     </div>
    //   ) : (
    //     <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="space-y-2">
    //           <Label htmlFor="firstName">First Name</Label>
    //           <Input
    //             type="text"
    //             id="firstName"
    //             name="firstName"
    //             value={formData.firstName}
    //             onChange={handleChange}
    //             placeholder="Enter your first name"
    //             autoComplete="off"
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="lastName">Last Name</Label>
    //           <Input
    //             type="text"
    //             id="lastName"
    //             name="lastName"
    //             value={formData.lastName}
    //             onChange={handleChange}
    //             placeholder="Enter your last name"
    //             autoComplete="off"
    //             required
    //           />
    //         </div>
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="email">Email</Label>
    //         <Input
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           placeholder="Enter your email"
    //           autoComplete="off"
    //           required
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="phone">Phone Number</Label>
    //         <Input
    //           type="tel"
    //           id="phone"
    //           name="phone"
    //           value={formData.phone}
    //           onChange={handleChange}
    //           placeholder="Enter your phone number"
    //           autoComplete="off"
    //           required
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="address">Address</Label>
    //         <Input
    //           type="text"
    //           id="address"
    //           name="address"
    //           value={formData.address}
    //           onChange={handleChange}
    //           placeholder="Enter your address"
    //           autoComplete="off"
    //           required
    //         />
    //       </div>

    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //         <div className="space-y-2">
    //           <Label htmlFor="city">City</Label>
    //           <Input
    //             type="text"
    //             id="city"
    //             name="city"
    //             value={formData.city}
    //             onChange={handleChange}
    //             placeholder="Enter your city"
    //             autoComplete="off"
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="state">State</Label>
    //           <Input
    //             type="text"
    //             id="state"
    //             name="state"
    //             value={formData.state}
    //             onChange={handleChange}
    //             placeholder="Enter your state"
    //             autoComplete="off"
    //             required
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="zipCode">ZIP Code</Label>
    //           <Input
    //             type="text"
    //             id="zipCode"
    //             name="zipCode"
    //             value={formData.zipCode}
    //             onChange={handleChange}
    //             placeholder="Enter ZIP code"
    //             autoComplete="off"
    //             required
    //           />
    //         </div>
    //       </div>

    //       <div className="mt-6">
    //         <Button 
    //           type="submit" 
    //           className="w-full"
    //           disabled={status === 'submitting'}
    //         >
    //           {status === 'submitting' ? 'Submitting...' : submitButtonText}
    //         </Button>
    //       </div>
    //     </form>
    //   )}
    // </div>
  );
};

export default PersonalDetailsForm; 