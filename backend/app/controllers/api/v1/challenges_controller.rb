module Api
  module V1
    class ChallengesController < ApplicationController
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
        params[:start_date] = Date.today
        params[:end_date] = Date.today + 1.day
        challenge = Challenge.new(challenge_params)
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
    end
  end
end
