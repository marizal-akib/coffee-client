import Swal from 'sweetalert2'



const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const coffee = form.coffee_name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo_URL.value;

    const newCoffee = {
      coffee,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch('http://localhost:5000/coffee',{
        method:"POST",
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data=>{console.log(data)
        if(data.insertedId){
            console.log('success');
            Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }}
    )
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee} action="">
        {/* row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="coffee_name"
                placeholder="Coffee Name"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        {/* row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input w-full input-bordered"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control md:w-full ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group mb-3">
              <input
                type="text"
                name="photo_URL"
                placeholder="Photo URL"
                className="input w-full input-bordered"
              />
            </label>
            <input
              className="btn bg-black btn-block text-white"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
