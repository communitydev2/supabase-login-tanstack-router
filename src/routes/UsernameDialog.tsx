import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import classes from '../assets/Auth.module.css';

export const Route = createFileRoute('/UsernameDialog')({
  component: Username,
})


import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useEffect } from 'react';
import { background } from 'storybook/theming';






export function Username() {
   const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [badWords,setBadWords] = useState<string[]>([]);
  useEffect(() => {
    async function getProfile() {
      setLoading(true)


let { data, error } = await supabase
  .from('banned_words')
  .select('*')


  
      // let { data, error } = await supabase
      //   .from('user_account')
      //   .select(`username`)
      //   .eq('user_id', user.id)
      //   .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setBadWords(data)
      }

      setLoading(false)
    }
    getProfile()
  }, [])




  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
  //  add profatnity
  for (let i=0;i<badWords.length;i++){
    if(username == badWords[i].word ){
      console.log("match")
    }

  }



    setLoading(false)
  }
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
       Poke app
      </Title>

      {/* <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text> */}

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput label="Username" placeholder="Enter your username" required radius="md" onChange={(e)=>setUsername(e.target.value)}/>
          <Text >This username is not accepted.   </Text>
        <Button fullWidth mt="xl" radius="md" onClick={handleLogin}>
            {loading ? <span>Loading</span> : <span>Sign up with username</span>}
        </Button>
      </Paper>
    </Container>
  );
}