<template>
  <div class="cookie-consent-banner" v-if="$store.state.showCookieConsent">
    <div class="cookie-consent-banner__inner">
      <div class="cookie-consent-banner__copy">
        <div class="cookie-consent-banner__header">
          THIS WEBSITE USES COOKIES
        </div>
        <div class="cookie-consent-banner__description">
          We use cookies to personalise content and ads, to provide social media
          features and to analyse our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you’ve
          provided to them or that they’ve collected from your use of their
          services. You consent to our cookies if you continue to use our
          website.
        </div>
      </div>

      <div class="cookie-consent-banner__actions">
        <a class="cookie-consent-banner__cta" @click="handleOkClick"> OK </a>

        <a
          class="cookie-consent-banner__cta cookie-consent-banner__cta--secondary"
          @click="handleDeclineClick"
        >
          Decline
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOkClick() {
      this.$store.commit("changeAllowCookies", true);
      this.$store.commit("updateShowCookieConsent", false);
    },
    handleDeclineClick() {
      this.$store.commit("changeAllowCookies", false);
      this.$store.commit("updateShowCookieConsent", false);
    },
  },
};
</script>

<style scoped>
.cookie-consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2147483645;
  box-sizing: border-box;
  width: 100%;
  background-color: #f1f6f4;
}

.cookie-consent-banner__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0;
}

.cookie-consent-banner__copy {
  margin-bottom: 16px;
}

.cookie-consent-banner__actions {
}

.cookie-consent-banner__header {
  margin-bottom: 8px;

  font-family: "CeraPRO-Bold", sans-serif, arial;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}

.cookie-consent-banner__description {
  font-family: "CeraPRO-Regular", sans-serif, arial;
  font-weight: normal;
  color: #838f93;
  font-size: 16px;
  line-height: 24px;
}

.cookie-consent-banner__cta {
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  min-width: 164px;
  padding: 11px 13px;

  border-radius: 2px;

  background-color: #2c3e50;

  color: #fff;
  text-decoration: none;
  text-align: center;
  font-family: "CeraPRO-Regular", sans-serif, arial;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
}

.cookie-consent-banner__cta--secondary {
  padding: 9px 13px;

  border: 2px solid #3a4649;

  background-color: transparent;

  color: #2c3e50;
}

.cookie-consent-banner__cta:hover {
  background-color: #507090;
}

.cookie-consent-banner__cta--secondary:hover {
  border-color: #838f93;

  background-color: transparent;

  color: #415c77;
}

.cookie-consent-banner__cta:last-child {
  margin-left: 16px;
}
</style>
