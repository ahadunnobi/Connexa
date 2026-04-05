# Facebook Page Integration Setup Guide

Follow these steps to connect Connexa to your Facebook Page for autonomous posting.

## 1. Create a Meta Developer App
1. Go to the [Meta for Developers](https://developers.facebook.com/) portal and log in.
2. Click **Create App** and select **Other** -> **Business** (or relevant type for Page posting).
3. Provide an App Name (e.g., `Connexa-Automation`).

## 2. Add Facebook Login Product
1. In your App Dashboard, find **Facebook Login** and click **Set Up**.
2. Select **Web**. You don't need to complete the wizard, just ensure the product is active.

## 3. Obtain a Page Access Token
> [!IMPORTANT]
> Do NOT use a User Access Token. You need a **Page Access Token** to post as a Page.

1. Go to the [Graph API Explorer](https://developers.facebook.com/tools/explorer/).
2. Select your App in the "Meta App" dropdown.
3. In the "User or Page" dropdown, select the Page you want to post to.
4. Add the following permissions:
   - `pages_manage_posts`
   - `pages_read_engagement`
   - `pages_show_list`
   - `publish_video` (if you plan to post videos)
5. Click **Generate Access Token**.
6. Follow the prompts to grant the App access to your Page.

## 4. Convert to Long-Lived Token (Optional but Recommended)
By default, the token lasts about 1-2 hours. To get a permanent or long-lived token:
1. Copy the generated token.
2. Use the **Access Token Debugger** to extend its life.
3. Replace your `.env` value with this long-lived token.

## 5. Get your Page ID
1. Go to your Facebook Page.
2. Click **About** -> **Page Transparency** (or look at the URL/Page Settings).
3. Copy the numeric **Page ID**.

## 6. Update `.env`
Add these values to your `.env` file:

```env
FB_PAGE_ID="your_page_id_here"
FB_PAGE_ACCESS_TOKEN="your_access_token_here"
```

## How to Test
Once configured, Connexa will use the Facebook Graph API endpoint:
`POST https://graph.facebook.com/v20.0/{PAGE_ID}/feed`
with the `message` and `access_token` parameters.
