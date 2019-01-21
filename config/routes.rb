Rails.application.routes.draw do

  # root 'posts#index'

  resources :posts, defaults: {format: :json}
  resource :users, defaults: {format: :json}
  resource :session, defaults: {format: :json}

  # get 'posts/:id/encode', to: 'pages#encode_view', as: 'encode_image'
  # patch 'posts/:id/encrypt', to: 'pages#encrypt', as: 'encrypt_image'
  # get 'posts/:id/decrypt', to: 'pages#decrypt', as: 'decrypt_image'
  # post 'posts/:id/encode', to: 'pages#encode', as: 'encode_image'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
