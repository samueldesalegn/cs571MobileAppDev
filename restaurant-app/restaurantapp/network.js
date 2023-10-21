const baseURL = 'http://localhost:5001';

const checkError = async (response, error) => {
  const responseData = await response.json();
  if (responseData.success) return responseData.data;
  throw new Error(error + responseData.error);
};

export async function signup(email, password) {
  try {
    const response = await fetch(`${baseURL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('Sign-up failed');

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function login(email, password) {
  try {
    const response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('Login failed');

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getFoods(token) {
  try {
    const response = await fetch(`${baseURL}/restaurant/${resId}/foods`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch products');

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getUser(id, token) {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error('Unauthorized');
      return { success: false, error: 'Unauthorized' };
    }

    const data = await response.json();
    if (data) return { success: true, data };
  } catch (error) {
    return { success: false, error: 'An error occurred' };
  }
}


// Define a function to add food to a restaurant
export async function addFood(restaurantId, foodData, token) {
  try {
    const response = await fetch(`${baseURL}/${restaurantId}/foods`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(foodData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    console.error('Error adding food to the restaurant:', error);
    throw error; // You can handle the error as needed in your component
  }
}


export async function updateProfile(data, token) {
  try {
    console.log("Updating profile with data:", data);
    const response = await fetch(`${baseURL}/update/${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });

    console.log("Response from server:", response);

    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error; // You can handle the error as needed in your component
  }
}

export async function deleteUser(id, token) {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Failed to delete product');

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
