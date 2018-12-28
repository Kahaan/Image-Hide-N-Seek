Rails.application.routes.draw do
  get 'images/new'
  get 'images/show'
  get 'images/update'
  get 'images/delete'
  # get 'image/new'
  root to: 'images#index'
  resources :images
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
