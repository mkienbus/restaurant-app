Rails.application.routes.draw do

  get '/me', to: "users#show"
  
  get '/restaurants/favorites', to: 'restaurants#favorites'
  resources :restaurants
  resources :users, only: [:create, :index, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
