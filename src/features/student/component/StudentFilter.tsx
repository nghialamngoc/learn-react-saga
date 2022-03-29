import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { Box } from '@mui/system';
import { useAppSelector } from 'app/hooks';
import { selecteCityList } from 'features/city/citySlice';
import { ListParams } from 'models/common';
import React, { useRef } from 'react';

export interface StudentFilterProps {
  filter: ListParams;
  onChange: (newFilter: ListParams) => void;
  onSearchChange: (newFilter: ListParams) => void;
}

export default function StudentFilter({
  filter,
  onChange,
  onSearchChange,
}: StudentFilterProps) {
  const searchTimer = useRef<any>(null);
  const cityList = useAppSelector(selecteCityList);
  const inputRef = useRef<HTMLInputElement>();

  const handleSearchChange = (value: string) => {
    if (searchTimer) {
      clearTimeout(searchTimer.current);
    }

    searchTimer.current = setTimeout(() => {
      onSearchChange({
        ...filter,
        name_like: value,
        _page: 1,
      });
    }, 500);
  };

  return (
    <Box>
      <Box mb={2}>Student Filter</Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-weight"
              label="Search"
              value={filter.name_like || ''}
              inputRef={inputRef}
              onChange={(e) => {
                handleSearchChange(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter.city ? filter.city : ''}
              label="City"
              onChange={(e) => {
                onChange({
                  ...filter,
                  city: e.target.value || undefined,
                  _page: 1,
                });
              }}
            >
              <MenuItem value="''">All</MenuItem>
              {cityList.map((x, index) => {
                return (
                  <MenuItem key={index} value={x.code}>
                    {x.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter._sort ? `${filter._sort}.${filter._order}` : ''}
              label="sortBy"
              onChange={(e) => {
                if (!e.target.value) {
                  onChange({
                    ...filter,
                    _sort: undefined,
                    _order: undefined,
                  });
                }

                const [_sort, _order] = e.target.value.split('.');

                onChange({
                  ...filter,
                  _sort: _sort || undefined,
                  _order: (_order as 'desc' | 'asc') || undefined,
                });
              }}
            >
              <MenuItem value="''">No sort</MenuItem>
              <MenuItem value="name.desc">Name DESC</MenuItem>
              <MenuItem value="name.asc">Name ASC</MenuItem>
              <MenuItem value="mark.desc">Mark DESC</MenuItem>
              <MenuItem value="mark.asc">Mark ASC</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={1}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => {
              onChange({
                ...filter,
                _page: 1,
                _sort: undefined,
                _order: undefined,
                city: undefined,
                name_like: undefined,
              });

              if (inputRef.current) {
                inputRef.current.value = '';
              }
            }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
