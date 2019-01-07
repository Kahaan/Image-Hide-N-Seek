Rails.application.routes.draw do

  get 'sessions/new'
  root 'posts#index'
  resources :posts
  resource :users


  get 'posts/:id/encode', to: 'pages#encode_view', as: 'encode_image'
  patch 'posts/:id/encrypt', to: 'pages#encrypt', as: 'encrypt_image'
  get 'posts/:id/decrypt', to: 'pages#decrypt', as: 'decrypt_image'
  # post 'posts/:id/encode', to: 'pages#encode', as: 'encode_image'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
