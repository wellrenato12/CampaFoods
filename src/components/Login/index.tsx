import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { LogOut } from 'lucide-react'
import { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../lib/axios'
import { DeliveryContext } from '../../context/DeliveryContext'

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'Confirmação de senha deve ter pelo menos 6 caracteres'),
  profilePicture: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Senhas não coincidem',
  path: ['confirmPassword'],
})

type LoginFormValues = z.infer<typeof loginSchema>
type RegisterFormValues = z.infer<typeof registerSchema>

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [hasRegister, setHasRegister] = useState(false)
  const { handleHasUser, saveUser } = useContext(DeliveryContext)

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const {
    handleSubmit: handleLoginSubmit,
    register: registerLogin,
    formState: loginFormState,
    reset: resetLoginForm
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    handleSubmit: handleRegisterSubmit,
    register: registerUser,
    formState: registerFormState,
    reset: resetRegisterForm
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  async function handleLogin(data: LoginFormValues) {
    try {
      const response = await api.get(`/users?email=${data.email}&password=${data.password}`)

      if (response.data.length > 0) {
        const user = response.data[0]
        alert('Logado com sucesso!')
        resetLoginForm()
        handleHasUser()
        saveUser(user)
        onClose();
      } else {
        console.error('Usuário não encontrado ou senha incorreta')
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error)
    }
  }

  async function handleCreateUser(data: RegisterFormValues) {
    try {
      await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
          profilePicture: data.profilePicture,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setHasRegister(true)
      resetRegisterForm()
      onClose()
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  const handleClose = () => {
    resetLoginForm()
    resetRegisterForm()
    onClose()
  }

  return (
    <>
      <div
        className='flex items-center gap-2 text-xl hover:text-[#ffb30e] transition-all'
        onClick={onOpen}
      >
        <LogOut />
        Entrar ou cadastrar
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        {hasRegister ? (
          <ModalContent>
            <ModalHeader>Faça login</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleLoginSubmit(handleLogin)}>
              <ModalBody className='flex flex-col gap-8'>
                <input
                  {...registerLogin("email")}
                  className='bg-zinc-100 py-2 px-4 rounded-lg'
                  type="email"
                  placeholder='Seu e-mail'
                  required
                />
                <input
                  {...registerLogin("password")}
                  className='bg-zinc-100 py-2 px-4 rounded-lg'
                  type="password"
                  placeholder='Senha'
                  required
                />
              </ModalBody>

              <ModalFooter className='flex gap-8'>
                <button className='mr-auto text-[ffb30e] font-medium' onClick={() => setHasRegister(false)}>Cadastrar</button>
                <div className='flex gap-4'>
                  <button
                    type='submit'
                    disabled={loginFormState.isSubmitting}
                    className='bg-[#ffb30e] py-1 px-4 rounded-lg font-medium hover:scale-105 transition-all'>Login</button>
                  <button
                    className='bg-zinc-100 py-1 px-4 rounded-lg font-medium hover:scale-105 transition-all'
                    onClick={handleClose}
                  >
                    Cancelar
                  </button>
                </div>
              </ModalFooter>
            </form>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader>Crie sua conta</ModalHeader>
            <ModalCloseButton />
            <form
              onSubmit={handleRegisterSubmit(handleCreateUser)}
            >
              <ModalBody className='flex flex-col gap-8'>
                <input
                  {...registerUser("name")}
                  className='bg-zinc-100 py-2 px-4 rounded-lg'
                  type="text"
                  placeholder='Nome completo'
                  required
                />
                <input
                  {...registerUser("email")}
                  className='bg-zinc-100 py-2 px-4 rounded-lg'
                  type="email"
                  placeholder='Seu e-mail'
                  required
                />
                <input
                  {...registerUser("password")}
                  className='bg-zinc-100 py-2 px-4 rounded-lg'
                  type="password"
                  placeholder='Sua senha'
                  required
                />
                <input
                  {...registerUser("confirmPassword")}
                  className='bg-zinc-100 py-2 px-4 rounded-lg'
                  type="password"
                  placeholder='Senha novamente'
                  required
                />
                <input
                  {...registerUser("profilePicture")}
                  className='bg-zinc-100 py-2 px-4 rounded-lg'
                  type="text"
                  placeholder='link da foto de perfil'
                  required
                />
              </ModalBody>

              <ModalFooter className='flex gap-8'>
                <button onClick={() => setHasRegister(true)} className='mr-auto text-[ffb30e] font-medium'>Login</button>
                <div className='flex gap-4'>
                  <button type='submit' disabled={registerFormState.isSubmitting} className='bg-[#ffb30e] py-1 px-4 rounded-lg font-medium hover:scale-105 transition-all'>Criar</button>
                  <button className='bg-zinc-100 py-1 px-4 rounded-lg font-medium hover:scale-105 transition-all' onClick={handleClose}>Cancelar</button>
                </div>
              </ModalFooter>
            </form>
          </ModalContent>
        )}
      </Modal>
    </>
  )
}
