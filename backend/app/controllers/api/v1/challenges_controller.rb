module Api
  module V1
    class ChallengesController < ApplicationController
      before_action :authenticate_user!, only: %i[create update destroy]
      before_action :authorize_admin, only: %i[create update destroy]
      # GET /api/v1/challenges
      def index
        challenges = Challenge.all
        render json: challenges, status: :ok
      end

      # GET /api/v1/challenges/:id
      def show
        challenge = Challenge.find(params[:id])
        render json: challenge, status: :ok
      end

      # POST /api/v1/challenges
      def create
        challenge = current_user.challenges.build(challenge_params)
        if challenge.save
          render json: challenge, status: :created
        else
          render json: { errors: challenge.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/challenges/:id
      def update
        challenge = Challenge.find(params[:id])
        if challenge.update(challenge_params)
          render json: challenge, status: :ok
        else
          render json: { errors: challenge.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/challenges/:id
      def destroy
        challenge = Challenge.find(params[:id])
        challenge.destroy
        head :no_content
      end

      private

      def challenge_params
        params.require(:challenge).permit(:title, :description, :start_date, :end_date)
      end

      def authorize_admin
        return if current_user.email == ENV['ADMIN_EMAIL']
        render json: { error: 'You are not authorized to perform this action' }, status: :unauthorized
      end
    end
  end
end
