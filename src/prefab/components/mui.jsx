import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function alert() {
  return <Alert severity="warning">This is a warning alert — check it out!</Alert>;
}

export function autocomplete() {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={['One', 'Two', 'Three']}
      renderInput={(params) => (
        <TextField
          {...params}
          label="enter text"
          margin="normal"
          variant="outlined"
          sx={{ backgroundColor: 'white' }}
        />
      )}
    />
  );
}

export function avatarImage() {
  return <Avatar alt="Jay Doe" src="https://randomuser.me/api/portraits/lego/5.jpg" />;
}

export function avatarLetter() {
  return <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>;
}

export function backdrop() {
  return <Button variant="contained">Hello World</Button>;
}

export function box() {
  return <Button variant="contained">Hello World</Button>;
}

export function breadcrumbs() {
  return <Button variant="contained">Hello World</Button>;
}

export function button() {
  return <Button variant="contained">Hello World</Button>;
}

export function card() {
  return <Button variant="contained">Hello World</Button>;
}

export function container() {
  return <Button variant="contained">Hello World</Button>;
}

export function dialog() {
  return <Button variant="contained">Hello World</Button>;
}

export function fab() {
  return <Button variant="contained">Hello World</Button>;
}

export function grid() {
  return <Button variant="contained">Hello World</Button>;
}

export function imageList() {
  return <Button variant="contained">Hello World</Button>;
}

export function paper() {
  return <Button variant="contained">Hello World</Button>;
}

export function progress() {
  return <Button variant="contained">Hello World</Button>;
}

export function rating() {
  return <Button variant="contained">Hello World</Button>;
}

export function switch_() {
  return <Button variant="contained">Hello World</Button>;
}

export function textField() {
  return <Button variant="contained">Hello World</Button>;
}
