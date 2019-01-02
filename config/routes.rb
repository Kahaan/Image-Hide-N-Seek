Rails.application.routes.draw do

  resources :posts

  get 'posts/:id/encode', to: 'pages#encode'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
