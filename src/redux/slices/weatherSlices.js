import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
//action
export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (payload, {rejectWithValue, getState, dispatch}) => {
try {
    const {data} = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY} ');
    return data;
} catch(error){
    if(!error?.response){
        throw error
    }
    return rejectWithValue(error?.response?.data);
      }
    }
);
//pending
//fulfilled
//rejected

//slice

const weatherSclice = createSclice({
    name: "weather",
    initialState:{},
    extraReducers: (builder)=>{
        //pending
        builder.addCase(fetchWeatherAction.pending, (state, action)=>{});
        state.loading = true;
    });
    //fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
        state.weather = action ?.payload;
        state.loading = false;
        state.error = undefined;
    });
    //rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
        state.loading = false;
        state.weather = undefined;
        state.error = action?.payload;
    });
  },
});