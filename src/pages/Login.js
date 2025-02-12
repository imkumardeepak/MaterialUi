import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { CssVarsProvider } from '@mui/joy/styles';
import { green } from '@mui/material/colors';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Button
      variant="link"
      onClick={() => {
        setMode(mode === 'dark' ? 'light' : 'dark');
      }}
    >
      {mode === 'dark' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function Login() {
  return (
     <CssVarsProvider>
    <div style={{backgroundColor:green}}>

         <ModeToggle />
      <CssBaseline />
      <Sheet
        sx={{
          width: 360,
          mx: 'auto', // margin left & right
          my: 10, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'lg',

        }}
        variant="outlined"
      >
        <div>
          <Typography sx={{ textAlign: 'center' }} level="h3" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography sx={{ textAlign: 'center' }} level="body-sm">
            Sign in to continue.
          </Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }} color="primary">
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>

     
    </div>
    </CssVarsProvider>
  );
}
