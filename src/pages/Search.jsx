import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchProducts } from "../redux/SearchSlice";
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/material/Autocomplete';

const Search = ({ setKeyword }) => {
  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    ignoreCase: true,
    ignoreAccents: true,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);
/*
  const handleSearch = (keyword) => {
    dispatch(getSearchProducts(keyword)).then(() => {
      navigate("/search"); // Arama sonuçları sayfasına yönlendirme
    });
  };
*/
  return (
    <div>
      <Autocomplete
       sx={{
        '& .MuiAutocomplete-option:hover': {
          backgroundColor: 'darkred',
          fontWeight: 'bold',
        },
        '& .MuiAutocomplete-option': {
          backgroundColor: 'black',
          fontWeight: 'bold',
        }
      }}
      filterOptions={filterOptions}
        onChange={(event ,value) => {
          setKeyword(value);
          const selectedProduct = products.find( product => product.title === value);
          if (selectedProduct ){
            navigate(`/products/${selectedProduct.id}`);
          }
        }}
        options={products.map(product => product.title)}
        onInputChange={(event, newInputValue) => {  
          setKeyword(newInputValue);
        }}
        renderInput={(params) => (
          <TextField

            {...params}
            label="Search .. "
            size="small"
            // variant="outlined"
            // focused 
            id="outlined-basic" 
            InputLabelProps={{
              style: {
                visibility: params.inputProps.value.length > 0 ? 'hidden' : 'visible'
              }
            }}
            sx={{
              width: '200px',
              height: '50px',

              '& fieldset': {
                border: 'none',
              },
              '& label': {
                fontWeight: 'bold',

                transform: 'translate(70px, 10px)',
                fontSize : "18px"
              },
              '& input': {
                fontWeight: 'bold',
              }



            }}
          />
        )}
      />
    </div>
  );
};

export default Search;
