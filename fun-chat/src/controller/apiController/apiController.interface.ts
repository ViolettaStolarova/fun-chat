import { GeneralResponse, UserFromServer, UserMessageFromServer } from '../../api/api.interfaces';

export interface IApiController {
  handleServerError(response: GeneralResponse<'error', string>): Promise<void>;

  reestablishLoginForLoggedInUser(): Promise<void>;

  handleLoginResponse(response: GeneralResponse<'user', UserFromServer>): Promise<void>;
  handleLogoutResponse(response: GeneralResponse<'user', UserFromServer>): Promise<void>;

  handleExternalLogin(response: GeneralResponse<'user', UserFromServer>): Promise<void>;
  handleExternalLogout(response: GeneralResponse<'user', UserFromServer>): Promise<void>;

  handleGetActiveUsersResponse(response: GeneralResponse<'users', UserFromServer[]>): Promise<void>;
  handleGetInactiveUsersResponse(
    response: GeneralResponse<'users', UserFromServer[]>
  ): Promise<void>;

  handleSendMessageToUserResponse(
    response: GeneralResponse<'message', UserMessageFromServer>
  ): Promise<void>;

  handleGetMessageHistoryResponse(response: GeneralResponse<'messages', []>): Promise<void>;

  handleChangeMessageDeliveryStatus(): Promise<void>;

  handleChangeMessageReadStatusResponse(): Promise<void>;

  handleMessageDeletionResponse(
    response: GeneralResponse<
      'message',
      {
        id: string;
      }
    >
  ): Promise<void>;
}
