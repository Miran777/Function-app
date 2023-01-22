import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Layout } from './Components/layout';
import { Homepage } from './Components/homepage';
import { Users, usersLoader } from './Components/users';
import { About } from './Components/about';
import { Info } from './Components/info';
import { NotFoundPage } from './Components/notFoundPage';
import { Posts, postsLoader } from './Components/posts';
import { SinglePage, pageLoader } from './Components/singlePage';
import { EditPost, updatePostAction } from './Components/editPost';
import { CreatePost, createPostAction } from './Components/createPost';
import { User, userLoader } from './Components/user';
import { Login } from './Components/login';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import { ErrorPage } from './Components/errorPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Layout /> } >
    <Route index element={<Homepage />}/>
    <Route path='users' element={<Users />} loader={usersLoader}/>
    <Route path='users/:id' element={<User /> } loader={userLoader}/>
    <Route path='info' element={<Info />} />
    <Route path='about/*' element={<About />} />
    <Route path='posts' element={<Posts /> } loader={postsLoader}  errorElement={<ErrorPage/>}/>
    <Route path='posts/:id' element={<SinglePage />} loader={pageLoader} />
    <Route path='posts/:id/edit' element={<EditPost />} loader={pageLoader} action={updatePostAction}/>
    <Route path='login' element={<Login />} />
    <Route path='posts/new' element={
      <RequireAuth>
        <CreatePost/>
      </RequireAuth>
      } action={createPostAction}/>
    <Route path='*' element={<NotFoundPage />} />
</Route>
))


function App() {
  return (
    <>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </>
  );
}

export default App;
