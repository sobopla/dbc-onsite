get '/register' do
 erb :'/users/register'
end

post '/register' do
  @user = User.create(params[:user])
 if @user.valid?
   redirect '/login?s=1'
 elsif @user.valid? == false || params[:user][:password].empty?
 @errors = @user.errors.full_messages
  erb :'users/register'
 end
end

get '/login' do
  if params[:login] == "failed"
    @error = "incorrect credentials"
  end

  if params[:s] == "1"
     @successful = "Account created! Go ahead and login:"
   end
   erb :'users/login'
end

post '/login' do
  @user = User.find_by(email: params[:email])
   if @user.nil?
     status 404
     @error
   elsif @user.authenticate(params[:email], params[:password])
     session[:user_id] = @user.id
     redirect '/decks'
   else
     status 404
     @error
   end
   redirect to '/login?login=failed'
end

get '/logout' do
  session.delete(:user_id)
  redirect '/decks'
end

get '/users/:user_id' do
 @user = current_user
 @rounds = Round.where(user_id: @user.id)
  erb :'users/show'
end

